export const parseAddedTime = (addedString: string): number => {
  const match = addedString.match(/(\d+)\s+(\w+)/);
  if (!match) return Infinity; // If no match, treat as the farthest in the future

  return parseInt(match[1], 10);
};

export const compareIPAddresses = (
  ipA: string,
  ipB: string,
  sortOrder: "asc" | "desc"
) => {
  const segmentsA = ipA.split(".").map(Number);
  const segmentsB = ipB.split(".").map(Number);

  for (let i = 0; i < 4; i++) {
    if (segmentsA[i] !== segmentsB[i]) {
      return sortOrder === "asc"
        ? segmentsA[i] - segmentsB[i]
        : segmentsB[i] - segmentsA[i];
    }
  }
  return 0; // If equal
};

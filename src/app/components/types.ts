export interface Device {
  id: number;
  device: string;
  ipAddress: string;
  location: string;
  added: string;
  lastSession: string;
}
export type SortableField = keyof Device;

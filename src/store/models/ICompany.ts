export default interface ICompany {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  location?: {
    locality?: string;
    country?: string;
  };
  industry?: string;
  foundedYear?: number;
  linkedInUrl?: string;
  sizeRange?: string;
  currentEmployeeEstimate?: number;
  totalEmployeeEstimate?: number;
  createdAt?: string;
}

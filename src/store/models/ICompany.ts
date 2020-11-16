export default interface ICompany {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  type?: string;
  website?: string;
  headquarters?: string;
  country?: string;
  industry?: string;
  foundedYear?: number;
  linkedInUrl?: string;
  sizeRange?: string;
  currentEmployeeEstimate?: number;
  totalEmployeeEstimate?: number;
  createdAt?: string;
}

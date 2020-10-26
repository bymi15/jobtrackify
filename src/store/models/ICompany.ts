export default interface ICompany {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  headquarter?: {
    city?: string;
    country?: string;
  };
  industry?: string;
  foundedYear?: string;
}

import { ICompany } from '../store/models';

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
function stripDiacritics(str: string) {
  return typeof str.normalize !== 'undefined'
    ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : str;
}

export default function filterCompanies(
  query: string,
  companies: ICompany[],
  limit: number = 5,
  matchFrom: string = 'any'
) {
  query = stripDiacritics(query).toLowerCase().trim();
  if (query === '') return [];
  const filteredCompanies = companies.filter((company) => {
    const candidate = stripDiacritics(company.name).toLowerCase().trim();
    return matchFrom === 'start'
      ? candidate.indexOf(query) === 0
      : candidate.indexOf(query) > -1;
  });
  return filteredCompanies.slice(0, limit);
}

import countries from 'world-countries';

type Props = {};
const formattedCountries = countries.map((country) => {
  return {
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region,
  };
});

function useCountries() {
  const getAll = () => formattedCountries;
  formattedCountries;
  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return { getAll, getByValue };
}

export default useCountries;

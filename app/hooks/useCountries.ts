import countries from 'world-countries';

type Props = {};
const formattedCountries = countries.map((country) => {
  console.log(country);

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
  const setByValues = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return { getAll, setByValues };
}

export default useCountries;

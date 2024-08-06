import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CountriesFlag() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data.slice(0, 50));
    console.log(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row flex">
          {countries.map((country) => (
            <div
              key={country.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <article className="card h-100 w-18 rem">
                <img
                  className="card-img-top aspect-[3/4] object-cover h-full"
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                />
                <div className="card-body">
                  <h3 className="card-title"> {country.name.common} </h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

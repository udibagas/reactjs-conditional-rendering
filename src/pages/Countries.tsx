// import axios from "axios";
import { gql, useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
interface Country {
  code: string
  name: string
  emoji: string
}

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      emoji
      code
    }
  }
`;

export default function Countries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES)
  const countries: Country[] = data?.countries || []

  // useEffect(() => {
  // fetch('https://countries.trevorblades.com/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     query: `
  //       {
  //         countries {
  //           code
  //           name
  //           emoji
  //         }
  //       }
  //     `
  //   })
  // }).then(response => response.json())
  //   .then((data: any) => {
  //     const countries: Country[] = data.data.countries
  //     setCountries(countries)
  //   })

  // axios.post('https://countries.trevorblades.com/', {
  //   query: `
  //     query {
  //     countries {
  //         name
  //         code
  //         emoji
  //       }
  //   }
  //   `
  // }).then(response => {
  //   const countries: Country[] = response.data.data.countries
  //   setCountries(countries)
  // })

  // client.query({
  //   query: gql`
  //     query {
  //       countries {
  //         code
  //         name
  //         emoji
  //       }
  //     }
  //   `
  // }).then((result) => {
  //   setCountries(result.data.countries)
  // });



  // }, [])

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>
  }

  if (error) {
    return <div className="text-center mt-4">Error: {error.message}</div>
  }

  return (
    <div className="w-[90%] m-auto my-8">
      <h1 className="text-3xl mb-8 dark:text-slate-50">Countries</h1>

      <div className="flex flex-wrap gap-2">
        {countries.map((country: Country) => (
          <div className="border border-slate-300 py-2 px-4 dark:text-slate-50" key={country.code}>{country.emoji} {country.name} </div>
        ))}
      </div>
    </div>
  )
}
/** @jsx h */
import { h } from "https://deno.land/x/sift@0.4.3/mod.ts";

const types = [
  `A`,
  `AAAA`,
  // `ANAME`,
  // `ANY`,
  // `AXFR`,
  // `CAA`,
  // `CNAME`,
  // `HINFO`,
  // `HTTPS`,
  // `IXFR`,
  // `MX`,
  // `NAPTR`,
  // `NS`,
  // `NULL`,
  // `OPENPGPKEY`,
  // `OPT`,
  // `PTR`,
  // `SOA`,
  // `SRV`,
  // `SSHFP`,
  // `SVCB`,
  // `TLSA`,
  `TXT`,
  // `DNSSEC`,
  // `Unknown`,
  // `ZERO`
];

export async function resolveDns(hostname) {
  console.log({ hostname });

  const result = {};

  for (const type of types) {
    try {
      result[type] = await Deno.resolveDns(hostname, type);
    } catch (error) {
      console.error(error);
    }
  }
  console.log({ result });
  return result;
}

export const Dns = ({ records }) => {
  const arr = Object.entries(records);
  return (
    <div>
      <h1>DNS</h1>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {arr.map(([domain, ip]) => (
            <tr>
              <td>{domain}</td>
              <td>{ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

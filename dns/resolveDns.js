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
            result[type] = await Deno.resolveDns(hostname,
                type);
        } catch (error) {
            console.error(error);
        }
    }
    console.log({result});
    return result;
}
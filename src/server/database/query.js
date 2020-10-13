import faunadb, { query as q } from "faunadb";

export const dbAdmin = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_KEY });

export const dbServer = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_KEY });

export const dbGuest = new faunadb.Client({ secret: process.env.FAUNADB_GUEST_KEY });

export const queryDbAsAdmin = qry => dbAdmin.query(qry);

export const queryDbServer = qry => dbServer.query(qry);

export const queryDbAsGuest = qry => dbGuest.query(qry);



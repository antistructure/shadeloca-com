import faunadb, { query as q } from "faunadb";

const connectAsAdmin = new faunadb.Client({ secret: 'fnAD37jLSGACDLWBp-gD1-1YFC9Apfk8Mdb-B0MO' });

const connectServer = new faunadb.Client({ secret: 'fnAD37jgpeACDN8to7b5LrIosC2hrwd1sjlkoQ9b' });

const connectAsGuest = new faunadb.Client({ secret: 'fnAD37jqqOACCM9bRNyuAymwUs1cwU44EiEDKVTC' });



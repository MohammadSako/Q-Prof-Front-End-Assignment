import { Fragment } from "react";
import FormComponent from "../components/FormComponent";
import Head from "next/head";
import Form from "./form";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mohammad Murad Q-professionals Test</title>
        <meta name="Mohammad Murad" content="Q-professionals Test" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Form />
      </main>
    </Fragment>
  );
}

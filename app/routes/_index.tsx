import type { MetaFunction } from "@remix-run/node";
import { Container, Heading } from "@yamada-ui/react";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "KAMETSUN'S PAGE" },
    { name: "Welcome to KAMETSUN'S PAGE!", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Container>
      <Header />
      <Heading>Welcome to</Heading>
      <Heading>KAMETSUN&apos;S PAGE</Heading>
      <Heading>I&apos;m a Web Developer.</Heading>
    </Container>
  );
}

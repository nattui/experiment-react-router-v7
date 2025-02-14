import { Welcome } from "../welcome/welcome"
import type { Route } from "./+types/home"

export default function Home() {
  return <Welcome />
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { content: "Welcome to React Router!", name: "description" },
  ]
}

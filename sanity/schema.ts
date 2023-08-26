import { type SchemaTypeDefinition } from 'sanity'
import pageInfo from "@/sanity/schemas/pageInfo";
import experience from "@/sanity/schemas/experience";
import project from "@/sanity/schemas/project";
import skill from "@/sanity/schemas/skill";
import social from "@/sanity/schemas/social";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience,pageInfo,project,skill,social],
}

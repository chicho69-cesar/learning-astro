/* Cuando utilizamos la carpeta especial src/content/ en astro, lo que hacemos
es crear lo que se conoce como content collections, las cuales son herramientas
que se utilizan para administrar grupos de contenido similar, como en este
caso los posts de un blog. 
Las content collections nos ayudan a organizar nuestros documentos, 
validar nuestro YAML frontmatter, y proveer automáticamente TypeScript 
type-safety para todos nuestros contenidos sin necesidad de escribir tipos. */

// Importamos las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content'

/* Cuando usamos content collections es necesario definir el esquema de cada
colección, especificando el tipo de la colección que vamos a tener y el
schema de datos, el cual es un objeto donde definimos los tipos de datos
del frontmatter del content collection */
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
})

/* Exportamos las content collections como un objeto donde cada key
debe de ser el nombre de la carpeta donde esta el contenido, en este caso posts */
export const collections = {
  posts: postsCollection,
}

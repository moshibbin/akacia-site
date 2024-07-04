import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './app/sanity/schemas';


const config = defineConfig({
    projectId: '4kfmw40x',
    dataset: 'production',
    title: "Akacia website",
    apiVersion: "2024-07-03",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config
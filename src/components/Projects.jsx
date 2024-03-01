import { ProjectItem } from "./ProjectItem"

export const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projekt</h1>
        <p className="text-center py-8 text-stone-500">Kommer snart!</p>
        <div>
            <ProjectItem />
        </div>
        </div>
    )
}
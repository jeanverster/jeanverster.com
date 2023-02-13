import { SimpleGrid } from "@chakra-ui/layout";
import { Page } from "@layouts";
import { GithubRepository } from "@types";
import { atom } from "jotai";
import { ProjectCard } from "../../components/ProjectCard";

type ProjectsProps = {
  repos: GithubRepository[];
};

export const zoomAtom = atom(2);
export const sizeAtom = atom(48);

const Projects = ({ repos }: ProjectsProps): JSX.Element => {
  return (
    <Page
      title="Projects"
      description="Some things I've made in my spare time."
    >
      <SimpleGrid mt={8} columns={[1, 1, 2]} spacing={8}>
        {repos.map((repo) => (
          <ProjectCard key={repo.id} {...repo} />
        ))}
      </SimpleGrid>
    </Page>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.github.com/users/jeanverster/repos?per_page=100"
  );
  const json = await res.json();
  const repos = json.filter(
    (repo: any) => repo.stargazers_count > 10
  );
  return {
    props: {
      repos,
    },
  };
};

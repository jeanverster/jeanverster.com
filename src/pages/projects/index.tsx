import { Page } from "@layouts";
import { atom } from "jotai";
import * as React from "react";

type ProjectsProps = {};

export const zoomAtom = atom(2);
export const sizeAtom = atom(48);

const Projects = (props: ProjectsProps): JSX.Element => {
  return (
    <Page title="Projects" description="Bits and bobs I've built.">
      Content here
    </Page>
  );
};

export default Projects;

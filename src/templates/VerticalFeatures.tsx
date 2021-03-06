import Link from 'next/link';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { ListItem } from '../listitem/ListItem';
import { VerticalVideoRow } from '../video/VerticalVideoRow';

const VerticalFeatures = () => (
  <>
    <div id="config"></div>
    <Section
      title="Configurations of the application"
      description="Following is the brief configuration of the application."
    >
      <VerticalFeatureRow
        title="Front End"
        description="Using the following language and libraries."
        image="../../assets/images/frontend.svg"
        imageAlt=""
      >
        <div className="mt-5 ml-32">
          <ListItem
            img={'/assets/images/logo/typescript.png'}
            label="Typescript"
          />
          <ListItem img={'/assets/images/logo/react.png'} label="React" />
          <ListItem
            img="/assets/images/logo/create-react-app.svg"
            label="Create React App"
          />
          <ListItem img="/assets/images/logo/redux.webp" label="Redux" />
          <ListItem img="/assets/images/logo/mui.png" label="Material-UI" />
          <ListItem img="/assets/images/logo/emotion.webp" label="Emotion" />
        </div>
      </VerticalFeatureRow>
      <VerticalFeatureRow
        title="Back End"
        description="Using the following language and framework."
        image="/assets/images/backend.svg"
        imageAlt="Second feature alt text"
        reverse
      >
        <div className="mt-5 ml-32">
          <ListItem
            img={'/assets/images/logo/typescript.png'}
            label="Typescript"
          />
          <div style={{ marginTop: 10, marginLeft: -72 }}>
            <ListItem img="/assets/images/logo/fastify.svg" label="Fastify" />
          </div>

          <ListItem img="/assets/images/logo/prisma.png" label="Prisma" />
        </div>
      </VerticalFeatureRow>
      <VerticalFeatureRow
        title="Infrastructure"
        description="Deployed to AWS using Amazon ECS."
        image="/assets/images/AWS.svg"
        imageAlt="Third feature alt text"
      >
        <br />
        <Link href="../../assets/images/AWS.svg">
          <a className="text-xl text-primary-600 underline underline-offset-0">
            AWS Architecture Diagram
          </a>
        </Link>
      </VerticalFeatureRow>
    </Section>
    <div id="feature"></div>
    <Section
      title="Features of the application"
      description="The following is the features of the application."
    >
      <VerticalVideoRow
        title="Group Management"
        video="https://www.loom.com/embed/38fb586c9b7e4ad398b483253379982c"
        imageAlt=""
      >
        <div className="flex mt-6 text-xl leading-9 text-left">
          <ul className="list-disc">
            <li>Create your own group</li>
            <li>Invite users to your group</li>
            <li>Set or unset a user to the group admin</li>
          </ul>
        </div>
      </VerticalVideoRow>

      <VerticalVideoRow
        title="Project Management"
        video="https://www.loom.com/embed/e597e606223e45efbd17cbe4e73a6102"
        imageAlt=""
        reverse
      >
        <div className="flex mt-6 text-xl leading-9 text-left">
          <ul className="list-disc">
            <li>Create projects with admins and member</li>
            <li>Check the progress on the graph</li>
            <li>Only group admin can see all projects.</li>
          </ul>
        </div>
      </VerticalVideoRow>

      <VerticalVideoRow
        title="Task Management"
        video="https://www.loom.com/embed/7d72c36e3f6f43298c06ba3f2bac6709"
        imageAlt=""
      >
        <div className="flex mt-6 text-xl leading-9 text-left">
          <ul className="list-disc">
            <li>Create tasks</li>
            <li>Change the task status on the Kanban</li>
            <li>Check the schedule on the Calendar</li>
          </ul>
        </div>
      </VerticalVideoRow>

      <VerticalVideoRow
        title="Personalize"
        video="https://www.loom.com/embed/b986d74bfe154e5796cffc4981342e95"
        imageAlt=""
        reverse
      >
        <div className="flex mt-6 text-xl leading-9 text-left">
          <ul className="list-disc">
            <li>Dark mode</li>
            <li>Private mode</li>
            <li>Select a language from English and Japanese</li>
            <li>Edit your profile</li>
          </ul>
        </div>
      </VerticalVideoRow>
    </Section>
  </>
);

export { VerticalFeatures };

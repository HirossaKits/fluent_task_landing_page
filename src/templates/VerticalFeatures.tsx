import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { ListItem } from '../listitem/ListItem';
import Link from 'next/link';
import { VerticalVideoRow } from '../video/VerticalVideoRow';

const VerticalFeatures = () => (
  <>
    <Section
      title="Configuration of the application"
      description="The following is the configuration of the application."
    >
      <VerticalFeatureRow
        title="Front End"
        description="Using the following language and libraries."
        image="/assets/images/frontend.svg"
        imageAlt=""
      >
        <div className="mt-5 ml-32">
          <ListItem
            img={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
            }
            label="Typescript"
          />
          <ListItem
            img={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            }
            label="React"
          />
          <ListItem
            img="https://cdn.worldvectorlogo.com/logos/create-react-app.svg"
            label="Create React App"
          />
          <ListItem
            img="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/redux.png"
            label="Redux"
          />
          <ListItem img="https://mui.com/static/logo.png" label="Material-UI" />
          <ListItem
            img="https://emotion.sh/static/a76dfa0d18a0536af9e917cdb8f873b9/350dd/emotion.webp"
            label="Emotion"
          />
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
            img={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
            }
            label="Typescript"
          />
          <ListItem img="/assets/images/logo/fastify.svg" label="Fastify" />
          <ListItem img="../../assets/images/logo/prisma.png" label="Prisma" />
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
            <li>Create project with admins and member</li>
            <li>Check the progress on the graph</li>
            <li>Only group admins can see all project.</li>
          </ul>
        </div>
      </VerticalVideoRow>

      <VerticalVideoRow
        title="Task Management"
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
    </Section>
  </>
);

export { VerticalFeatures };

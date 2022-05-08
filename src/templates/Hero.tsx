import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Introduction of my Application \n'}
            <span className="text-primary-500">Project Management Tool</span>
          </>
        }
        description="Some features are still in production..."
        button={
          <Link href="https://fluent-task.com">
            <a>
              <Button xl>Go To Application</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

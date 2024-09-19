import './Section.scss'

interface SectionProps{
    children: React.ReactNode
}

export const Section = (props: SectionProps) => {
  return <div className='section'>{props.children}</div>;
};

export interface HeaderProps {
  links: Array<{
    title: string;
    url: string;
  }>;
  onSignIn: () => void;
}

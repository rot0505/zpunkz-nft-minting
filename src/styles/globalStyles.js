import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  margin-top: auto;
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const Row = styled.div`
  width: 100%;

  .row {
    display: flex;
    width: 100%;
  }

  .col-md-4 {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666666%;
  }
`

export const NoWallet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  max-width: 28rem;
  width: 100%;

  .no-wallet {
      display: flex;
      flex-direction: column;
      padding: 1.5rem 1rem;

      --tw-bg-opacity: 1;
      --tw-border-opacity: 1;
      --tw-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
      --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);
      background-color: rgb(255 255 255/var(--tw-bg-opacity));
      border-color: rgb(248 250 252/var(--tw-border-opacity));
      border-radius: 0.5rem;
      border-width: 1px;
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
  }

  button {
    --tw-bg-opacity: 1;
    --tw-border-opacity: 1;
    --tw-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    border-color: rgb(226 232 240/var(--tw-border-opacity));
    border-radius: 9999px;
    border-width: 1px;
    box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
    font-weight: 600;
    padding: 0.5rem 1.5rem;
}

  button.primary {
      --tw-text-opacity: 1;
      --tw-bg-opacity: 1;
      background-color: rgb(99 102 241/var(--tw-bg-opacity));
      border-width: 1px;
      color: rgb(255 255 255/var(--tw-text-opacity));
  }

  .no-wallet .merkle-proof-manual-address {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      text-align: center;
  }

  .no-wallet .merkle-proof-manual-address h2 {
    --tw-text-opacity: 1;
      color: rgb(79 70 229/var(--tw-text-opacity));
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.75rem;
      text-align: center;
  }
`
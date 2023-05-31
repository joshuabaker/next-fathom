<img src="./assets/banner.svg" alt="Next Fathom" width="100%" />

# Next Fathom

Next Fathom is a component wrapper
around [`fathom-client`](https://github.com/derrickreimer/fathom-client) that allows you to quickly
and easily add [Fathom Analytics](https://usefathom.com) to your Next.js
projects that use the App Router.

## Installation

To install the package using `npm`, run the following command in your terminal:

```bash
npm install next-fathom
```

Alternatively, if you are using `yarn`, use the following command:

```bash
yarn add next-fathom
```

## Usage

In your layout, import and add the `Fathom` component, and add your Site ID to the `siteId` prop.
This will load the Fathom client and track page views automatically.

```jsx
import { Fathom } from "next-fathom";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Fathom siteId={"MY_FATHOM_ID"} />
        {children}
      </body>
    </html>
  );
}
```

### Other methods

This package also re-exports everything from
the [`fathom-client` package](https://github.com/derrickreimer/fathom-client) (
e.g. `trackPageview`, `trackGoal`, etc.). See
the [`fathom-client` readme](https://github.com/derrickreimer/fathom-client/blob/master/README.md)
for how to use these.

## Referrals

If you’ve not yet signed up you can use my referral link to get $10 credit.

[**Get $10 credit for Fathom Analytics**](https://usefathom.com/ref/LPFAXI)

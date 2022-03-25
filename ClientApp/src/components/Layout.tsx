import React from 'react';

export default function Layout(props: any) {
  return (
    <section style={{ width: "100%", display: "flex", flexFlow: "row wrap", justifyContent: "space-around" }}>
      {props.children}
    </section>
  );
}

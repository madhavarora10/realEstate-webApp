export function generateStaticParams() {
  const response = [{
    name: 'hello',
  },
  {
    name: 'hello2',
  }];

  return response.map((post) => ({ name: post.name }));
}

export default function Page({ params }) {
  const { response } = params;
  console.log(response);

    <h1>:hi</h1>;
}

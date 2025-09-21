import { Button, Link } from '@radix-ui/themes';

export default function Home() {
  return (
    <Link href='/create-task' className="!flex !w-30 !mx-auto !mt-8">
      <Button className="!text-lg !cursor-pointer !bg-[#3B6985] hover:!bg-[#5787A2]">Create Task</Button>
    </Link>
  );
}

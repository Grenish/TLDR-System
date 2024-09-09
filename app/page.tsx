//page.tsx
import ContentEditor from "./components/ContentEditor";
import ContentOutput from "./components/ContentOutput";
import FileUpload from "./components/FileUpload";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className=" w-full">
        <ContentEditor />
        <FileUpload />
      </div>
      <div className=" w-full">
        <ContentOutput />
      </div>
    </div>
  );
}

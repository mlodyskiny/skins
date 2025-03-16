import React from 'react';
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
interface Skin 
{
  name: string;
  description: string;
}
interface SkinData 
{
  base_files_url: string;
  base_screenshot_url: string;
  skins: Skin[];
}
export default function App() 
{
  const [skinData, setSkinData] = React.useState<SkinData | null>(null);

  React.useEffect(() => 
  {
    fetch("https://raw.githubusercontent.com/mlodyskiny/skins/refs/heads/main/skins.json", {cache: "no-store"})
    .then(response=> response.json())
    .then(data => { setSkinData(data); })
  }, []);

  const handleDownload = (skinName: string) => 
  {
    if (!skinData)
    {
      return;
    }
    const downloadUrl = `${skinData.base_files_url}${skinName}.osk`;
    window.open(downloadUrl, '_blank');
  };

  if (!skinData) 
  {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">💲💲 PDW SKIN HUB 💲💲</h1>
      <div className="flex flex-col gap-6">
        {skinData.skins.map((skin) => (
            <Card key={skin.name} className="w-full overflow-hidden bg-neutral-900">
              <div className="grid grid-cols-1 md:grid-cols-2 border-transparent bg-neutral-900">
                <div className="h-full relative overflow-hidden">
                  <Image
                      alt={`${skin.name} preview`}
                      className="w-full h-full object-cover"
                      style={{
                        borderTopLeftRadius: '0.5rem',
                        borderBottomLeftRadius: '0.5rem',
                        borderBottomRightRadius: '0.0rem',
                        borderTopRightRadius: '0.0rem',
                      }}
                      src={`${skinData.base_screenshot_url}${skin.name}.jpg?raw=true`}
                      fallbackSrc="https://preview.redd.it/3a2yrhmqj5u01.png?auto=webp&s=b34005ce3a1a0cbfbcb87b6e3e99ee2493d7c5d9"
                  />
                </div>
                <CardBody className="flex flex-col justify-between p-8 bg-neutral-900">
                  <div className="flex-grow flex flex-col items-center justify-center gap-3">
                    <p className="text-6xl font-bold text-white text-center">{skin.name}</p>
                    <p className="text-2xl text-gray-400 text-center">{skin.description}</p>
                  </div>
                  <Button
                      color="primary"
                      onPress={() => handleDownload(skin.name)}
                      startContent={<Icon icon="lucide:download"/>}
                      size="lg"
                      className="w-full mt-8 text-xl h-14"
                  >
                    FREE DOWNLOAD
                  </Button>
                </CardBody>
              </div>
            </Card>
        ))}
        <a className="text-center text-large font-bold">strona stworzona na konkurs dla technikum nr 3 w wadowicach</a>
      </div>
    </div>
  );
}

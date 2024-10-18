import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { WindupChildren } from 'windups'
import { Fire } from './Fire'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  useEffect(() => {
    window.electron.ipcRenderer.on('fortune', (event, arg) => {
      console.log('Received fortune event:', event)
      console.log('fortune message:', arg)
    })
    window.electron.ipcRenderer.on('message', (event, arg) => {
      console.log('Received fortune event:', event)
      console.log('fortune message:', arg)
    })
    console.log('aaaaaaaa')
  }, [])

  return (
    <div className="w-full h-full bg-black">
      <div className="w-full flex items-center justify-center pt-12">
        <WindupChildren>
          <p className="text-white text-8xl">hello!!!!!!1</p>
        </WindupChildren>
      </div>

      <div className="w-full h-full absolute z-10 bg-black">
        <Canvas camera={{ position: [0, -4, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Fire color={'red'} scale={7} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>

      {/* <WindupChildren>
        {"It's fun to do"}
        <em>{'wild'}</em>
        {'stuff with text!'}
      </WindupChildren> */}
    </div>
  )
}

export default App

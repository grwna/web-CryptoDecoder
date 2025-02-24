import { Form } from "./components/Form" 
import { But } from "./components/But"
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

export function App(){
  const [plaintext, setPlaintext] = useState("")
  const [ciphertext, setCiphertext] = useState("")
  const [rot, setRot] = useState(0)

  function incrRot(){
    setRot((prev) => prev+1)
  }

  function decrRot(){
    setRot((prev) => prev-1)
  }

  function changePlaintext(pt){
    setPlaintext(pt)
  }



  async function handleDecode(){
    try {
      const res = await axios.get("http://127.0.0.1:8080/api/caesar", 
          {params: {pt:plaintext, rot:rot}})
      setCiphertext(res.data.ciphertext)
    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }


  useEffect(() => {handleDecode()}, [plaintext, rot])

  return (
    <>
    <h1>Caesar Cipher</h1>
    <main>
        <Form name="plaintext"
              edit={true}
              onChange={changePlaintext}
              ></Form>
        <But rot={rot}
             incrRot={incrRot}
             decrRot={decrRot}
        ></But>
        <Form name="ciphertext"
              edit={false}
              value={ciphertext}
              ></Form>

    </main>
    </>
  )
}
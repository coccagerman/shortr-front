import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import ErrorMsg from './ErrorMsg'

const Loader:React.FC = () => {
    const params = useParams()
    const [requestError, setRequestError] = useState<boolean>(false)

    const redirect = () => {
        try {
            axios({
                method: 'get',
                url: 'http://localhost:3030/' + params.urlid,
            })
            .then(response => window.location = response.data)
            .catch(() => setRequestError(true))
        } catch (err) {
            setRequestError(true)
            console.error(err)
        }
    }

    useEffect(() => redirect(), [])

    return (
        <>
            {requestError ?
                <ErrorMsg/>
            :
                <LoaderContainer>
                    <div className="loadingio-spinner-dual-ring-5kd3lx25fil"><div className="ldio-ukd0hebb1bk">
                    <div></div><div><div></div></div>
                    </div></div>
                </LoaderContainer>
            }
        </>
  )

}

export default Loader

const LoaderContainer = styled.header`  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
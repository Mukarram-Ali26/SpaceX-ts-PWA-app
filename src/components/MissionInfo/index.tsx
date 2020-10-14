import React, { useEffect } from 'react';
import { useLaunchMissinInfoQuery } from '../../generated/graphql';
import Details from './Details';
import './Details.css';

interface OwnProps {
    id: number;
}

const InfoContainer = ({ id }: OwnProps) => {
    const { data, error, loading, refetch } = useLaunchMissinInfoQuery({ variables: { id: String(id) } });

    useEffect(() => {
        refetch();
    }, [id]);

    if (loading) {
        return <div>...</div>;
    }

    if (error || !data) {
        return <h3>Select a flight from the panel</h3>;
    }

    // if (!data) {
    //     return <div>Select a flight from the panel</div>;
    // }

    return (
        <div className='detail'><Details data={data} /></div>
    )
}

export default InfoContainer;
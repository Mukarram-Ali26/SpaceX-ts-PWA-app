import React from 'react';
import { useMissionsInfoQuery } from '../../generated/graphql'
import MissionList, {OwnProps} from './MissionList'

export const MissionContainer = (props: OwnProps) => {

    const { data, error, loading } = useMissionsInfoQuery();
    if (loading) {
        return <div>LOADING...</div>
    }

    if (error || !data) { 
        return <div>Error please check your internet connection.</div>
    }


    return (
        <div data-spy="scroll">
            <h4>Launch List</h4>
            <MissionList data={data} {...props} />
        </div>
    )
}
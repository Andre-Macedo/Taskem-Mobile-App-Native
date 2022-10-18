import React, { useEffect } from 'react';
import { View } from 'react-native';
import { defaultStyles } from '../styles/styles';
import { SafeAreaView } from 'react-native';

import { Header } from '../components/Header';
import { Filters } from '../components/Filters';
import { List } from '../components/List';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { executeRequest } from '../services/api';

export const HomeScreen = () => {

    // LIST STATES
    const [tasks, setTasks] = useState([]);

    // FILTERS STATES   
    const [periodStart, setPeriodStart] = useState('');
    const [periodEnd, setPeriodEnd] = useState('');
    const [status, setStatus] = useState(0);

    // SHOW MODAL STATE
    const [showModal, setShowModal] = useState(false);

    // REGISTER STATE
    const [error, setError] = useState('');
    const [taskName, setTaskName] = useState('');
    const [scheduledDate, setScheduledDate] = useState('');


    const getTasksWithFilter = async () => {
        try {
            let filters = '?status=' + status;

            if (periodStart) {
                filters += '&periodStart=' + periodStart;
            }

            if (periodEnd) {
                filters += '&periodEnd=' + periodEnd;
            }

            const result = await executeRequest('task' + filters, 'get');
            if (result && result.data) {
                setTasks(result.data);
            }
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getTasksWithFilter()
    }, [status, periodEnd, periodStart]);

    return (
        <SafeAreaView style={[defaultStyles.container, defaultStyles.containerTop]}>
            <Header />
            <Filters />
            <List list={tasks} />
            <Footer />
        </SafeAreaView>
    );
}
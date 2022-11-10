import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { filterStyles, defaultStyles } from '../styles/styles';
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

export const Filters = () => {

    const [showFilters, setShowFilters] = useState(false);
    const [status, setStatus] = useState(0);
    const [periodStart, setPeriodStart] = useState<Date>(new Date());
    const [showPeriodStart, setShowPeriodStart] = useState(false);
    const [periodEnd, setPeriodEnd] = useState<Date>(new Date());
    const [showPeriodEnd, setShowPeriodEnd] = useState(false);

    return (
        <View style={filterStyles.container}>
            <View style={filterStyles.title}>
                <Text style={filterStyles.titleText}>Tasks</Text>
                <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
                    <Image source={require('../assets/images/filter.png')} />
                </TouchableOpacity>
            </View>
            {showFilters === true && (
                <View style={filterStyles.filters}>
                    <View style={filterStyles.filtersFields}>
                        <Text style={filterStyles.label}>Period start:</Text>
                        <TouchableOpacity style={[defaultStyles.inputSelect, filterStyles.datePicker]}
                            onPress={() => setShowPeriodStart(!showPeriodStart)}>
                            <Text style={filterStyles.label}>{moment(periodStart).format("DD/MM/yyyy")}</Text>
                        </TouchableOpacity>
                        {showPeriodStart === true && <DateTimePicker
                            mode="date"
                            value={periodStart}
                            is24Hour={true}
                            display="default"
                            onChange={(_: any, selectedDate: any) => {
                                setPeriodStart(selectedDate)
                                setShowPeriodStart(false)
                            }}
                        />
                        }
                    </View>
                    <View style={filterStyles.filtersFields}>
                        <Text style={filterStyles.label}>Period end:</Text>
                        <TouchableOpacity style={[defaultStyles.inputSelect, filterStyles.datePicker]}
                            onPress={() => setShowPeriodEnd(!showPeriodEnd)}>
                            <Text style={filterStyles.label}>{moment(periodEnd).format("DD/MM/yyyy")}</Text>
                        </TouchableOpacity>
                        {showPeriodEnd === true && <DateTimePicker style={defaultStyles.inputSelect}
                            mode="date"
                            value={periodEnd}
                            is24Hour={true}
                            display="default"
                            onChange={(_: any, selectedDate: any) => {
                                setPeriodEnd(selectedDate)
                                setShowPeriodEnd(false)
                            }}
                        />}
                    </View>
                    <View style={filterStyles.filtersFields}>
                        <Text style={filterStyles.label}>Status:</Text>
                        <Picker
                            style={[defaultStyles.inputSelect, { borderColor: "#7C7786", borderWidth: 5 }]}
                            itemStyle={defaultStyles.inputSelect}
                            selectedValue={status}
                            onValueChange={(itemValue) => setStatus(itemValue)}>
                            <Picker.Item label="All" value={0} />
                            <Picker.Item label="Active" value={1} />
                            <Picker.Item label="Finished" value={2} />
                        </Picker>
                    </View>
                </View>
            )}
        </View>
    );
}
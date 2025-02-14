import React, { useState } from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router, usePathname } from "expo-router";

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(params.query);

    return (
        <View className="flex flex-row items-center justify-between w-full mt-5">
            <View className="flex-1 flex flex-row items-center justify-start text-left z-50 border-1 border-gray-500 bg-gray-100 p-2 rounded-lg">
                <Ionicons name="search" size={24} />
                <TextInput
                    value={search}
                    placeholder="Search for anything"
                    className="text-sm font-rubik ml-2 w-full flex-1"
                />
            </View>

            {/* <TouchableOpacity>
                  <Ionicons name="notifications-outline" size={24} />
                </TouchableOpacity> */}
        </View>
    );
};

export default Search;
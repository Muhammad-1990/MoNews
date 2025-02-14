import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Search from "@/components/Search";
import Featured from "@/components/Featured";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-white">
          <View className="px-5">

            <Search />

            <View className="my-5 flex flex-col justify-start">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-700">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <Featured />

            </View>

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-blue-900">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      
    </SafeAreaView>
  );
}

export default Home
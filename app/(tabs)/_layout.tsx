import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// const TabIcon = ({
//   focused,
//   icon,
//   title,
// }: {
//   focused: boolean;
//   icon: ImageSourcePropType;
//   title: string;
// }) => (
//   <View className="flex-1 mt-3 flex flex-col items-center">
//     <Image
//       source={icon}
//       tintColor={focused ? "#0061FF" : "#666876"}
//       resizeMode="contain"
//       className="size-6"
//     />
//     <Text
//       className={`${
//         focused
//           ? "text-primary-300 font-rubik-medium"
//           : "text-black-200 font-rubik"
//       } text-xs w-full text-center mt-1`}
//     >
//       {title}
//     </Text>
//   </View>
// );

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions =
      {{
        tabBarActiveTintColor: '#0061FF',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options =
        {{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => ( <Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} /> )
        }}
      />
      <Tabs.Screen
        name="discover"
        options =
        {{
          title: "Discover",
          headerShown: false,
          tabBarIcon: ({ focused }) => ( <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={24} /> )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
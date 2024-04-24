import { Box, Center, Heading } from "native-base";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../../../theme/colors";

export default function Home() {
  return (
    <>
      <Box w="90%" mx="auto" pt={5} safeArea>
        {/* <Button title="Back" onPress={() => navigation("")} /> */}
        <Heading>Statistic</Heading>
        <Center>
          <LineChart
            data={{
              labels: ["12 Months", "24 Months", "36 Months"],
              datasets: [
                {
                  color: (opacity = 1) => colors.primary,
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={350} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#ffffff0",
              backgroundGradientFrom: "#ffffff0",
              backgroundGradientTo: "#ffffff0",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => "#0000000",
              labelColor: (opacity = 1) => "#000000",
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: colors.primary,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </Center>
      </Box>
    </>
  );
}

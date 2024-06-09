import { CChart } from "@coreui/react-chartjs";

function Chart({ homeValue, monthlyPayment, loanAmount, tenure }) {
  return (
    <>
      <CChart
        type="pie"
        data={{
          labels: ["Principle", "Interest"],
          datasets: [
            {
              backgroundColor: [
                "rgba(26, 16, 60, 0.95)",
                "rgba(255, 225, 90, 0.84)",
              ],
              data: [homeValue, monthlyPayment * tenure * 12 - loanAmount],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "green",
              },
            },
          },
        }}
      />
    </>
  );
}

export default Chart;

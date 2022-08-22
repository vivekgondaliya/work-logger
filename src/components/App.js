import AddWork from "./AddWork";
import AddWorkButton from "./AddWorkButton";
import HeaderComponent from "./HeaderComponent";
import WorkList from "./WorkList";


const workList = [
  {
    header: 'Rhythm API vs Impexium API - LOE',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    extra: 'BHMA',
    meta: 'August 22, 2022'
  },
  {
    header: 'UPDATE NOW - Reporting Tables Not Working',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    extra: 'NAED',
    meta: 'August 18, 2022'
  },
];

function App() {
  return (
    <div className="container">
		  <HeaderComponent />
      <AddWorkButton />
      <WorkList data={workList} />
      <AddWork />
    </div>
  );
}

export default App;

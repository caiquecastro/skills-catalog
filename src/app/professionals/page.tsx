import {
  Card,
  Table,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";

const ProfessionalsPage: React.FC = () => {
  return (
    <>
      <Title className="mb-4">Profissionais</Title>

      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Project</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
        </Table>
      </Card>
    </>
  );
};

export default ProfessionalsPage;

import { Title } from "@tremor/react";

const SkillsPage: React.FC = () => {
  return (
    <>
      <Title>Habilidades</Title>

      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Nome
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Quantidade de profissionais
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">React.js</th>
            <td className="px-6 py-4">10</td>
            <td className="flex justify-end gap-4 px-6 py-4 font-medium">
              <a href="">Excluir</a>
              <a href="" className="text-primary-700">
                Editar
              </a>
            </td>
          </tr>
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Java</th>
            <td className="px-6 py-4">50</td>
            <td className="flex justify-end gap-4 px-6 py-4 font-medium">
              <a href="">Excluir</a>
              <a href="" className="text-primary-700">
                Editar
              </a>
            </td>
          </tr>
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Rust</th>
            <td className="px-6 py-4">2</td>
            <td className="flex justify-end gap-4 px-6 py-4 font-medium">
              <a href="" className="text-red-400">Excluir</a>
              <a href="" className="text-blue-500">
                Editar
              </a>
            </td>
          </tr>
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Frontend</th>
            <td className="px-6 py-4">100</td>
            <td className="flex justify-end gap-4 px-6 py-4 font-medium">
              <a href="">Excluir</a>
              <a href="" className="text-primary-700">
                Editar
              </a>
            </td>
          </tr>
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">.NET</th>
            <td className="px-6 py-4">40</td>
            <td className="flex justify-end gap-4 px-6 py-4 font-medium">
              <a href="">Excluir</a>
              <a href="" className="text-primary-700">
                Editar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SkillsPage;

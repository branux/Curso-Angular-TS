using DemosAngular.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace DemoAngularJS.API.Controllers
{
    public class ClientesController : ApiController
    {
        private static IList<Cliente> _clientes = new List<Cliente>
        {
            new Cliente { Id=1,Nome="Fabiano",Idade=36,Telefones=new List<Telefone> {
                new Telefone { Id = 1, Numero = "222-2222", ClienteId=1},
                new Telefone { Id = 2, Numero = "333-2222", ClienteId=1},
            } },

                new Cliente{ Id=2,Nome="Marcelo",Idade=33,Telefones=new List<Telefone> {
                new Telefone { Id = 3, Numero = "222-2222", ClienteId=2},
                new Telefone { Id = 4, Numero = "333-2222", ClienteId=2},
            } },

                new Cliente { Id=3,Nome="Daniel",Idade=40,Telefones=new List<Telefone> {
                new Telefone { Id = 5, Numero = "222-2222", ClienteId=3},
                new Telefone { Id = 6, Numero = "333-2222", ClienteId=3},
            } },

                new Cliente{ Id=4,Nome="João",Idade=31,Telefones=new List<Telefone> {
                new Telefone { Id = 7, Numero = "222-2222", ClienteId=4},
                new Telefone { Id = 8, Numero = "333-2222", ClienteId=4},
            } },
        };

        public IList<Cliente> Get()
        {
            return _clientes;
        }

        public Cliente Post([FromBody]Cliente cli)
        {
            cli.Id = _clientes.Count + 1;
            _clientes.Add(cli);
            return cli;
        }

        public Cliente Put(int id, [FromBody] Cliente cli)
        {
            var cliente = Obter(id);
            if (cliente != null)
            {
                cliente.Nome = cli.Nome;
                cliente.Idade = cli.Idade;
            }
            return cli;
        }

        public Cliente Delete(int id)
        {
            var cliente = Obter(id);
            if (cliente != null)
            {
                _clientes.Remove(cliente);
            }
            return cliente;
        }

        private Cliente Obter(int id)
        {
            return _clientes.FirstOrDefault(d => d.Id == id);
        }

    }
}
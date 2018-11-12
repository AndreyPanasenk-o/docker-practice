
using Cassandra;
using Cassandra.Data.Linq;

namespace Migrator
{
    public class Versioner
    {
        private ISession _session;
        public Versioner(ISession session)
        {
            this._session = session;


        }
    }
}

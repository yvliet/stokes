// Raw markdown content imports
import introductionRaw from '../content/docs/getting-started/introduction.md?raw';
import architectureVisionRaw from '../content/docs/getting-started/architecture-vision.md?raw';
import quickstartRaw from '../content/docs/getting-started/quickstart.md?raw';

import untypedSeamsRaw from '../content/docs/architecture/01-untyped-seams.md?raw';
import panicResilienceRaw from '../content/docs/architecture/02-panic-resilience.md?raw';
import boundaryGraphsRaw from '../content/docs/architecture/03-boundary-graphs.md?raw';
import channelManifestsRaw from '../content/docs/architecture/04-channel-manifests.md?raw';
import polyRepoProtocolRaw from '../content/docs/architecture/05-poly-repo-protocol.md?raw';
import projectionIsolationRaw from '../content/docs/architecture/06-projection-isolation.md?raw';
import ciMcpGateRaw from '../content/docs/architecture/07-ci-mcp-gate.md?raw';

import astEngineRaw from '../content/docs/engines/ast-engine.md?raw';
import subagentSwarmRaw from '../content/docs/engines/subagent-swarm.md?raw';
import verificationHarnessRaw from '../content/docs/engines/verification-harness.md?raw';
import dirichletCaseStudyRaw from '../content/docs/engines/dirichlet-case-study.md?raw';

import cliReferenceRaw from '../content/docs/reference/cli-reference.md?raw';
import lockfileSpecRaw from '../content/docs/reference/lockfile-spec.md?raw';
import mcpProtocolRaw from '../content/docs/reference/mcp-protocol.md?raw';
import complianceRaw from '../content/docs/reference/compliance.md?raw';

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export interface DocItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  lastUpdated?: string;
  readTime?: string;
  content: string;
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
}

export const DOCS_TREE: DocCategory[] = [
  {
    id: 'getting-started',
    name: 'getting started',
    items: [
      {
        id: 'introduction',
        title: '01. introduction & overview',
        slug: 'introduction',
        category: 'getting started',
        summary: 'overview of stokes as an autonomous cross-boundary systems invariant verification platform and multi-agent synthesis engine.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '4 min read',
        content: introductionRaw,
      },
      {
        id: 'architecture-vision',
        title: '02. architecture & vision',
        slug: 'architecture-vision',
        category: 'getting started',
        summary: 'why modern cloud systems collapse at untyped compiler seams despite isolated single-language compiler passes.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '5 min read',
        content: architectureVisionRaw,
      },
      {
        id: 'quickstart',
        title: '03. quickstart guide',
        slug: 'quickstart',
        category: 'getting started',
        summary: 'fast installation, contract scaffolding, strict CI verification, and local model context protocol (mcp) server launch.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '3 min read',
        content: quickstartRaw,
      },
    ],
  },
  {
    id: 'architecture',
    name: 'core systems invariants',
    items: [
      {
        id: 'untyped-seams',
        title: '01. untyped seams & context blindness',
        slug: 'untyped-seams',
        category: 'core systems invariants',
        summary: 'why monolingual linters (sqlfluff, mypy, clippy) suffer from context blindness across distributed database-to-proxy boundaries.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '6 min read',
        content: untypedSeamsRaw,
      },
      {
        id: 'panic-resilience',
        title: '02. panic vs. 100% error rate & resilience',
        slug: 'panic-resilience',
        category: 'core systems invariants',
        summary: 'why replacing panics with match statements produces a 100% 502 blackout, and how two-tier bounded intake solves it.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '6 min read',
        content: panicResilienceRaw,
      },
      {
        id: 'boundary-graphs',
        title: '03. boundary graphs vs. taint analysis',
        slug: 'boundary-graphs',
        category: 'core systems invariants',
        summary: 'sparse AST reachability graphs eliminate runtime overhead and false-positive CI blocks.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '5 min read',
        content: boundaryGraphsRaw,
      },
      {
        id: 'channel-manifests',
        title: '04. channel binding & declarative manifests',
        slug: 'channel-manifests',
        category: 'core systems invariants',
        summary: 'non-invasive contract adoption preserving native idiomatic types without intrusive protobuf/grpc rewrites.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '5 min read',
        content: channelManifestsRaw,
      },
      {
        id: 'poly-repo-protocol',
        title: '05. poly-repo sequence & ast extraction',
        slug: 'poly-repo-protocol',
        category: 'core systems invariants',
        summary: 'downstream consumer expansion before upstream deployment prevents circular merge deadlocks.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '6 min read',
        content: polyRepoProtocolRaw,
      },
      {
        id: 'projection-isolation',
        title: '06. projection consumption isolation',
        slug: 'projection-isolation',
        category: 'core systems invariants',
        summary: 'strict projection filtering isolates unconsumed internal columns from triggering contract alerts.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '5 min read',
        content: projectionIsolationRaw,
      },
      {
        id: 'ci-mcp-gate',
        title: '07. deterministic ci gate & native mcp',
        slug: 'ci-mcp-gate',
        category: 'core systems invariants',
        summary: 'sub-38ms AST CI gate and native json-rpc model context protocol server for AI coding agents.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '5 min read',
        content: ciMcpGateRaw,
      },
    ],
  },
  {
    id: 'engines',
    name: 'engines & incident analysis',
    items: [
      {
        id: 'ast-engine',
        title: 'multi-language ast analysis engine',
        slug: 'ast-engine',
        category: 'engines & incident analysis',
        summary: 'tree-sitter S-expression queries and fallback grammars across SQL, Protobuf, Python, and Rust.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '5 min read',
        content: astEngineRaw,
      },
      {
        id: 'subagent-swarm',
        title: 'autonomous subagent actor swarm',
        slug: 'subagent-swarm',
        category: 'engines & incident analysis',
        summary: 'dedicated language subagents with 4-byte big-endian IPC framing and 16.6ms render tick coalescing.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '6 min read',
        content: subagentSwarmRaw,
      },
      {
        id: 'verification-harness',
        title: 'fuzzing & simulation harness',
        slug: 'verification-harness',
        category: 'engines & incident analysis',
        summary: '10,000-case IEEE-754 float fuzzer, Criterion log parser, and RFC-2439 route flap simulator.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '6 min read',
        content: verificationHarnessRaw,
      },
      {
        id: 'dirichlet-case-study',
        title: 'dirichlet cloudflare outage reproduction',
        slug: 'dirichlet-case-study',
        category: 'engines & incident analysis',
        summary: 'complete production-grade reproduction of the Cloudflare Nov 18, 2025 outage cascade and stokes verification.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '7 min read',
        content: dirichletCaseStudyRaw,
      },
    ],
  },
  {
    id: 'reference',
    name: 'systems reference',
    items: [
      {
        id: 'cli-reference',
        title: 'cli command & flag reference',
        slug: 'cli-reference',
        category: 'systems reference',
        summary: 'complete documentation for stokes verify, codegen, mcp, diff, graph, init, scan, and remediate.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '8 min read',
        content: cliReferenceRaw,
      },
      {
        id: 'lockfile-spec',
        title: 'stokes.lock schema & digest specification',
        slug: 'lockfile-spec',
        category: 'systems reference',
        summary: 'cryptographic AST normalization, schema serialization rules, and multi-repo conflict resolution.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '6 min read',
        content: lockfileSpecRaw,
      },
      {
        id: 'mcp-protocol',
        title: 'model context protocol (mcp) specification',
        slug: 'mcp-protocol',
        category: 'systems reference',
        summary: 'stdio JSON-RPC 2.0 tool definitions, resource URIs, and prompt workflows for AI coding agents.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '6 min read',
        content: mcpProtocolRaw,
      },
      {
        id: 'compliance',
        title: 'compliance, attribution & hackathon ledger',
        slug: 'compliance',
        category: 'systems reference',
        summary: 'formal organizer ruling documentation, pre-prepared asset disclosure, and IBM Bob token audit ledger.',
        lastUpdated: 'last updated 1 day ago',
        readTime: '5 min read',
        content: complianceRaw,
      },
    ],
  },
];

// Helper to flatten all docs into a single sequential list for pagination
export function flattenDocs(tree: DocCategory[]): DocItem[] {
  const flattened: DocItem[] = [];
  for (const cat of tree) {
    for (const item of cat.items) {
      flattened.push(item);
    }
  }
  return flattened;
}

// Helper to find doc by slug or id
export function findDocBySlug(slugOrId: string, tree: DocCategory[]): DocItem | null {
  const target = slugOrId.toLowerCase().trim();
  for (const cat of tree) {
    for (const item of cat.items) {
      if (item.slug.toLowerCase() === target || item.id.toLowerCase() === target) {
        return item;
      }
    }
  }
  return null;
}

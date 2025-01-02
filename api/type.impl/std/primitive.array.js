(function() {
    var type_impls = Object.fromEntries([["core_pb",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Source-for-%5BS;+N%5D\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/log/0.4.22/src/log/kv/source.rs.html#196-198\">source</a><a href=\"#impl-Source-for-%5BS;+N%5D\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a>, S&gt; <a class=\"trait\" href=\"core_pb/driving/kv/trait.Source.html\" title=\"trait core_pb::driving::kv::Source\">Source</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.array.html\">[S; N]</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"core_pb/driving/kv/trait.Source.html\" title=\"trait core_pb::driving::kv::Source\">Source</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.visit\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/log/0.4.22/src/log/kv/source.rs.html#200\">source</a><a href=\"#method.visit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"core_pb/driving/kv/trait.Source.html#tymethod.visit\" class=\"fn\">visit</a>&lt;'kvs&gt;(\n    &amp;'kvs self,\n    visitor: &amp;mut dyn <a class=\"trait\" href=\"core_pb/driving/kv/trait.Visitor.html\" title=\"trait core_pb::driving::kv::Visitor\">VisitSource</a>&lt;'kvs&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"core_pb/driving/kv/struct.Error.html\" title=\"struct core_pb::driving::kv::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Visit key-values. <a href=\"core_pb/driving/kv/trait.Source.html#tymethod.visit\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/log/0.4.22/src/log/kv/source.rs.html#204\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"core_pb/driving/kv/trait.Source.html#method.get\" class=\"fn\">get</a>(&amp;self, key: <a class=\"struct\" href=\"core_pb/driving/kv/struct.Key.html\" title=\"struct core_pb::driving::kv::Key\">Key</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"core_pb/driving/kv/struct.Value.html\" title=\"struct core_pb::driving::kv::Value\">Value</a>&lt;'_&gt;&gt;</h4></section></summary><div class='docblock'>Get the value for a given key. <a href=\"core_pb/driving/kv/trait.Source.html#method.get\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.count\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/log/0.4.22/src/log/kv/source.rs.html#208\">source</a><a href=\"#method.count\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"core_pb/driving/kv/trait.Source.html#method.count\" class=\"fn\">count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Count the number of key-values that can be visited. <a href=\"core_pb/driving/kv/trait.Source.html#method.count\">Read more</a></div></details></div></details>","Source","core_pb::grid::Grid"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[3689]}